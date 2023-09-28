import React, { useState } from "react";
import styles from "./Navbar.module.css"
import Todos from '../Componets/Todos';
import { useValue } from "../TodoContext";


export default function Navbar(){
    const [isClicked,setIsClicked]=useState(false);
    const {handleAdd}=useValue();
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [id,setId]=useState("");
    function handleAddListClick() {
        setIsClicked(true);
      }
      function handleSubmit(e){
        e.preventDefault();
        handleAdd(id,userId,title);

        setTitle("");
        setUserId("");
        setId("");
        setIsClicked(false);
      }
    return(
        <>
        <div className={styles.Navbar}>
        <div className={styles.left}>TODO List</div>
        <div className={styles.right}><p className={styles.p} onClick={handleAddListClick}>Add-List</p>

        {isClicked?<form className={styles.from} onSubmit={handleSubmit}>
            <input placeholder=" Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input placeholder=" UserId" value={userId} onChange={(e)=>setUserId(e.target.value)}/>
            <input placeholder=" Id" value={id} onChange={(e)=>setId(e.target.value)}/>
            <button>Submit</button>
        </form>:null}
        </div>
        </div>


        <div className={styles.dummy}></div>
        <Todos/>
        </>
    )
}