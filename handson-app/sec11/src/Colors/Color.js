import {useNavigate} from "react-router";

export const Color = () => {
    const navigate = useNavigate();
    return (
        <section className="color" onClick={() => navigate(`/${id}`)}>
        </section>
    )
};
