import useInputState from "../../hooks/useInputState";


const HookForm = () => {

    // const [name, handleNameChange] = useInputState('Purna')
    const emailState = useInputState('purna@shoyon.go')
    const handleSubmit = e =>{
        console.log('form data', emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" /> */}
        <br />
        <input {...emailState} type="email" name="email" id="" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
        </div>
    );
};

export default HookForm;