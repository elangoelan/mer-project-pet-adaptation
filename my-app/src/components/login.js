
const Login=()=>(){
    
    return(
        <div>
            <form>
                <div className=''>
                    <label>Username:</label>
                    <input
                        type="text"
                        required
                    />
                </div>
                <div className=''>
                    <label>Password:</label>
                    <input
                        type="text"
                        required
                    />
                </div>
                <button className="redirect-button" onClick={}>Login </button>
            </form>
        </div>
    );
}