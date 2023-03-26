import React from "react";
import PropTypes from "prop-type";
const Profile =({person,children}) => {
    return (
        <div>
            <div>
                <h3>
                    {person.fullname}
                    {person.bio}
                    {person.profession}

                </h3>
                {children}

            </div>
            <button onClick={handelclick}>alert the name</button>
        </div>
    );
    function handelclick(e){
        e.preventDefault();
        alert(`name of profile user is ${person.fullname}`);
    }
};
export default Profile;
//default props
Profile.defaultProps = {
    person:{
        fullname:"Marwa Hichri",
        bio:"undifined",
        profession:"technical",
    },
};
//propTypes
Profile.prototype = {
    person:{
        fullname: PropTypes.string,
        bio: PropTypes.string,
        profession: PropTypes.string,

    },

};
