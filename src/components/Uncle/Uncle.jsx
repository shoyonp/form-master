import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Messi'}></Cousin>
                <Cousin name={'Kaka'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;