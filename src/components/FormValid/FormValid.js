import { reEmail, reName, inputErrorMessage as message } from "../../constants";

export const Validation = (e, setErrorMessage, setError) => {
    if (!e.target.value) {
        emptyInput(e, setErrorMessage, setError);
        return;
    } else if (e.target.name === 'email') {
        if (!reEmail.test(String(e.target.value).toLowerCase())) {
            setErrorMessage(old => ({
                ...old,
                [e.target.name]: message.emailIncorrect
            }));
            setError(old => ({
                ...old,
                [e.target.name]: true
            }));
        } else {
            correctInput(e, setErrorMessage, setError);
        }
        return
    } else if (e.target.name === 'password') {
        if (e.target.value.length < 8 ) {
            setErrorMessage(old => ({
                ...old,
                [e.target.name]: message.passwordIncorrect
            }));
            setError(old => ({
                ...old,
                [e.target.name]: true
            }));
        } else {
            correctInput(e, setErrorMessage, setError);
        }
        return
    } else if (e.target.name === 'name') {
        if (e.target.value.length < 3 ) {        
            setErrorMessage(old => ({
                ...old,
                [e.target.name]: message.nameLengthIncorrrect
            }));
            setError(old => ({
                ...old,
                [e.target.name]: true
            }));
            return          
        }  else if (!reName.test(String(e.target.value).toLowerCase())) {
            setErrorMessage(old => ({
                ...old,
                [e.target.name]: message.nameIncorrrect
            }));
            setError(old => ({
                ...old,
                [e.target.name]: true
            }));
            return
        } else {
            correctInput(e, setErrorMessage, setError);
            return
        }
        
    }
}

const emptyInput = (e, setErrorMessage, setError) => {
    setErrorMessage(old => ({
        ...old,
        [e.target.name]: message.fieldEmpty
    }))
    setError(old => ({
        ...old,
        [e.target.name]: true
    }));
}

const correctInput = (e, setErrorMessage, setError) => {
    setErrorMessage(old => ({
        ...old,
        [e.target.name]: ''
    }));
    setError(old => ({
        ...old,
        [e.target.name]: false
    }));
}
