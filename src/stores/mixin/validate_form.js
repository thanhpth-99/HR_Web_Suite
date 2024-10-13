import { ref } from 'vue'

export const useValidation = () => {
    const isValid = ref(true)

    const validateForm = () => {
        const forms = document.querySelectorAll('.needs-validation')

        Array.from(forms).forEach((form) => {
            form.addEventListener(
                'submit',
                (event) => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                },
                false,
            )
            if (!form.checkValidity()) {
                isValid.value = false
            }
        })
        return isValid.value
    }

    return { isValid, validateForm }
}
