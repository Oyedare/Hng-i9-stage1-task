import React, { useState } from 'react'

const Contact = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [succeed, setSucceed] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(isChecked === true){
            setSucceed(true)
            setTimeout(()=>{
                setSucceed(false)
            },3000)
            setFirstName('')
            setLastName('')
            setEmail('')
            setMessage('')
        }else{
            setSucceed(false)
        }
    }

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
    }
  return (
    <div className='contact-container'>
        <div className="content">
            <div className="content-head">
                <h3>Contact Me</h3>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className="input-fields">
                    <div className="name-input">
                        <div className="first-name">
                            <label htmlFor="first_name">First name</label>
                            <input 
                                type="text" 
                                id="first_name"
                                name='first_name'
                                required
                                onChange={e => setFirstName(e.target.value)}
                                value={firstName}
                                className= 'input'
                                placeholder='Enter your first name'
                            />
                        </div>
                        <div className="last-name">
                            <label htmlFor="last_name">Last name</label>
                            <input 
                                type="text" 
                                id="last_name"
                                name='last_name'
                                value={lastName} 
                                required
                                onChange={e => setLastName(e.target.value)}
                                className= 'input'
                                placeholder='Enter your last name'
                            />
                        </div>
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name='email'
                            required
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            className= 'input'
                            placeholder='yourname@email.com'
                        />
                    </div>

                    <div className="message">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            placeholder="Send me a message and I'll reply you as soon as possible..."
                            required
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            >

                        </textarea>
                    </div>

                    <div className="checkbox">
                        <input 
                            type="checkbox" 
                            name="checkbox" 
                            id="checkbox"
                            onChange={handleChange}
                        />
                        <p>You agree to providing your data to stephentony who may contact you.</p>
                    </div>
                </div>
                <button className={isChecked ? '' : 'inactive'} id='btn__submit'>Send a message</button>
            </form>
            {succeed && (
                <p className='succeed'>Message Sent!</p>
            )}
        </div>
    </div>
  )
}

export default Contact