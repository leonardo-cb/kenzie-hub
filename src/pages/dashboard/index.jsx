import { HeaderStyled, NavBarStyled, SectionStyled, TechListStyled } from "./styled";
import logo from "../../img/Logo.svg"
import addIcon from "../../img/+.svg";
import { ButtonSmall } from "../register/styled";
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechCard } from "../../components/TechCard";
import { Modal } from "../../components/Modal";
import { ToastContainer } from "react-toastify";
import { EditDeleteModal } from "../../components/EditDeleteModal";

function Dashboard() {

    const { user } = useContext(UserContext)

    const navigate = useNavigate()

    const [ modalState, setModalState ] = useState(false)

    const [ deleteModalState, setDeleteModalState ] = useState(false)
    
    function returnPage(){
        localStorage.removeItem("@id")
        localStorage.removeItem("@token")
        navigate(-1)
    }

    function openModal(e){
        e.preventDefault()
        setModalState(true)
    }

    return (
        <>  
            {modalState &&
            <Modal
            modalState={modalState}
            setModalState={setModalState} />}
            {deleteModalState &&
            <EditDeleteModal
            deleteModalState={deleteModalState}
            setDeleteModalState={setDeleteModalState}/>}
            <NavBarStyled>
                <div>
                    <img src={logo} alt="Kenzie Hub" />
                    <ButtonSmall onClick={returnPage}>Sair</ButtonSmall>
                </div>
            </NavBarStyled>
            <HeaderStyled>
                <div>
                    <h2>Olá, {user? user.name : ""}</h2>
                    <span>{user? user.course_module : ""}</span>
                </div>
            </HeaderStyled>
            <SectionStyled>
                <div>
                    <h2>Tecnologias</h2>
                    <button onClick={openModal}>
                        <img src={addIcon} />
                    </button>
                </div>
                <TechListStyled>
                {user.techs.length > 0 &&
                user.techs.map((tech, index) => {
                    return <TechCard 
                    tech={tech.title} 
                    status={tech.status} 
                    key={index}
                    id={tech.id}
                    setDeleteModalState={setDeleteModalState}/>
                })}
                </TechListStyled>
            </SectionStyled>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        </>
    )
}

export { Dashboard }