import React from 'react';
import {useState} from 'react';
import { connect, useSelector } from 'react-redux';
import  {getData}  from './action/type';
import  {createSelector}  from 'reselect';

const SchoolProject = (props) => {
  const[name, setName] = useState('');
  const[fname, setFname] = useState('');
  const[mname, setMname] = useState('');
  const[mobno, setMobno] = useState();
  const[attandance, setAttandance] = useState('');

  function onButtonClick(e) {
    e.preventDefault();
    const totalDetails= {
         name : {name},
         fname : {fname},
         mname : {mname},
         mobno : {mobno},
         attandance : {attandance}
    }
    props.getData(totalDetails);
  }

  const nameSelector = state => {
    return state.post.value.name;
  }
   const getNameSelector = createSelector([nameSelector],
    name => name.name
    )
   const valueOfName = useSelector(getNameSelector);

   const fnameSelector = state => {
     return state.post.value.fname;
   }

   const getFnameSelector = createSelector([fnameSelector],
    fname => fname.fname
    )
    const valOfFname = useSelector(getFnameSelector);

    const mnameSelector = state => {
      return state.post.value.mname;
    }

    const getMnameSelector = createSelector([mnameSelector],
      mname => mname.mname
      )
    const valOfMname = useSelector(getMnameSelector);

    const attandanceSelector = state => {
      return state.post.value.attandance;
    }

    const getAttandanceSelector = createSelector([attandanceSelector],
      attandance => attandance.attandance 
      )

    const valOfAttandance = useSelector(getAttandanceSelector);

    const mobSelector = state => {
      return state.post.value.mobno;
    }

    const mobNoSelector = createSelector([mobSelector],
      mobno => mobno.mobno
      )

      const valOfMobileNo = useSelector(mobNoSelector);
    return(
        <div>
         <label>Full Name </label>
         <input type = "text" name={name} onChange={(e) => setName(e.target.value)} required></input> 
         <br /><br /> 
         <label>Father Name </label>
         <input type = "text" name={fname} onChange={(e) => setFname(e.target.value)} required></input>  
         <br /><br /> 
         <label>Mother Name </label>
         <input type = "text" name={mname} onChange={(e) => setMname(e.target.value)} required></input>  
         <br /><br /> 
         <label>Mobile No </label>
         <input type = "tel" name={mobno} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(e) => setMobno(e.target.value)} required></input> 
         <br /><br /> 
         <label>Are you present today ?? </label>
         <label>Yes</label>
         <input type = "radio" name={attandance} checked={attandance === 'Yes'} attandance="Yes" onChange={(e) => setAttandance("Yes")} />
         <label>No</label>
         <input type = "radio" name={attandance} checked={attandance === 'No'} attandance="No" onChange={(e) => setAttandance("No")} />
        <br /> <br />
        <button onClick={onButtonClick}>Submit</button>
        <br /> <br /> <br />
        <hr />
        <h3>Get Data From Redux</h3>
        <p>Name: {valueOfName}</p>
        <p>Father Name: {valOfFname}</p>
        <p>Mother Name: {valOfMname}</p>
        <p>attandance: {valOfAttandance}</p>
        <p>Mobile Number: {valOfMobileNo}</p>
        </div>
    )

}

export default connect(null, {getData})(SchoolProject);
