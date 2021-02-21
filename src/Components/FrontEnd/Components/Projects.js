import React from 'react'
import '../SCSS/projectsStyling.css'
import NavbarComponents from './Navbar'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillFolderFill, BsTrash, BsCheckBox} from 'react-icons/bs'
function Projects() {
    return (
        <div className='projectsPageContainer'>
            <NavbarComponents/>
            <div className='projectsListContainer col-sm-12 col-md-12 col-lg-12'>
                <div className='projectContainer'>
                    <BsFillFolderFill className='projectIcon' size={100}/>
                    <BsTrash className='deleteProjectIcon' size={30}/>    
                    <BsCheckBox className='projectFinishedIcon' size={30}/>
                    <p>Project</p>
                    <p>Project Due: date</p>
                </div>
                
               
                
            </div>
        </div>
    )
}

export default Projects
