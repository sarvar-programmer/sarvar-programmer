import React,{Component} from "react";
export default class FirstComponent extends Component{
    componentWillUnmount() {
        alert('unmount')
    }
    render(){
        return(
            <div className="row" aria-disabled={true}>
                <div className="col-md-4 offset-4 mt-4">
                    <div className="card">
                        <div className="card-header"> 
                            <h2>Lorem ipsum dollor sit amet.</h2>
                        </div>
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic,
                                 consequuntur nam adipisci delectus ullam quam blanditiis enim beatae 
                                 laborum! Officia id itaque mollitia exercitationem, fuga voluptate nemo 
                                 perferendis quae.
                            </p>
                        </div>
                        <div className="card-footer">
                            <p className="text-end">
                                <a href="#">Next</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}