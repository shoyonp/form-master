import Special from "../Special/Special";

const MySelf = ({asset}) => {
    return (
        <div>
           <h2>me</h2>
           <section>
            <Special asset={asset}></Special>
           </section>
        </div>
    );
};

export default MySelf;