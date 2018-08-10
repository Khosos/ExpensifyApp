import React from 'react'; 
import ReactDOM from 'react-dom'; 

const Info = ({props = {info: "unknown"}}) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
); 

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>secret</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}; 

// requireAuth
const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? (
               <WrappedComponent {...props} />
            ) : <WrappedComponent /> }
        </div>
    )
}
const AdminInfo = withAdminWarning(Info); 

const AuthInfo = requireAuth(Info)


//ReactDOM.render(<AdminInfo isAdmin={true} info="this is it" />, document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuth={false} info="secret stuff" />, document.getElementById("app"))