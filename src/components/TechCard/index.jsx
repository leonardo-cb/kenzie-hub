import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledCard } from "./styled";

function TechCard({ tech, status, id, setDeleteModalState }){

    const { setTech } = useContext(TechContext)

    function openDeleteModal(){
        setDeleteModalState(true)
        setTech({
            title: tech,
            status: status,
            id: id
        })
    }

    return (
        <StyledCard onClick={openDeleteModal}>
            <h2>{tech}</h2>         
            <span>{status}</span>
        </StyledCard>
    )
}

export { TechCard }