import { Field } from "formik";

export function Select(options) {
    return (
        <div>
            <label htmlFor="id">texto - que pode vir via props</label>
            {/* trocar o field por select, caso não queira usar Formik */}
            <Field as="select" >
                {/* repetir essas options 3x com map, mas quero que vocês recebam as options das propriedades por props! */}
                <option>

                </option>

            </Field>
        </div>
    )
}