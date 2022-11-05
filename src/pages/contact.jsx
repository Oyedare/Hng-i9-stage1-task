import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className="content">
            <div className="content-head">
                <h3>Contact Me</h3>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form action="">
                <div className="input-fields">
                    <div className="name-input">
                        <div className="first-name">
                            <label htmlFor="fname">First name</label>
                            <input 
                                type="text" 
                                id="name"
                                name='name'
                                // value={} 
                                required
                                // onChange={handleChange}
                                className= 'input'
                                placeholder='Enter your first name'
                            />
                        </div>
                        <div className="last-name">
                            <label htmlFor="lname">Last name</label>
                            <input 
                                type="text" 
                                id="name"
                                name='name'
                                // value={} 
                                required
                                // onChange={handleChange}
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
                            // value={} 
                            required
                            // onChange={handleChange}
                            className= 'input'
                            placeholder='yourname@email.com'
                        />
                    </div>

                    <div className="message">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder="Send me a message and I'll reply you as soon as possible...">

                        </textarea>
                    </div>

                    <div className="checkbox">
                        <input 
                            type="checkbox" 
                            name="checkbox" 
                            id="checkbox" 
                        />
                        <p>You agree to providing your data to stephentony who may contact you.</p>
                    </div>
                </div>
                <button>Send a message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact