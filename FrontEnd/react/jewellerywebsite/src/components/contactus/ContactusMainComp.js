import React from 'react'

function ContactusMainComp() {
    return (
        <div>
            {/* <h2>contact us comp</h2> */}

            <div className='container'>
                <div className='row p-2' style={{ textAlign: "center", backgroundColor: "beige", }} >
                    <div className='col-4'></div>
                    <div className='col-4 p-5' >
                        <form>
                            <div class="input-group mb-3" >
                                <span class="input-group-text" id="basic-addon1">Name</span>
                                <input type="text" class="form-control" placeholder="e.g. K Santhosh Kumar" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2">@gmail.com</span>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Contact</span>
                                <input type="text" class="form-control" placeholder="phone" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Feedback</span>
                                <textarea type="text" class="form-control" placeholder="Your Feedback" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <button type='button' className='rounded'>Submit</button>
                        </form>
                    </div>
                    <div className='col-4'></div>
                </div>
            </div>
        </div>
    )
}

export default ContactusMainComp;
