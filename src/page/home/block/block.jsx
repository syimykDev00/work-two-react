import React from 'react';
import iconOne from "./../../../assets/img/iconOne.svg"
import iconTwo from "./../../../assets/img/iconTwo.svg"
import iconThree from "./../../../assets/img/iconThree.svg"

const Block = () => {
    return (
        <block id="block">
            <div className="container">
                <div className="block">
                    <div className="block-group">
                        <img src={iconOne} alt="img"/>
                        <h3>Design</h3>
                        <p>The project interface will be designed first,
                            our favorite tool is Figma.</p>
                    </div>
                    <div className="block-group">
                        <img src={iconTwo} alt="img"/>
                        <h3>Develop</h3>
                        <p>Transform design and write business logic here. Choose the technology you want.</p>
                    </div>
                    <div className="block-group">
                        <img src={iconThree} alt="img"/>
                        <h3>Ship</h3>
                        <p>After the work is complete, we will send the project and all its assets to you.</p>
                    </div>
                </div>
            </div>
            <div className="block-line"></div>
        </block>
    );
};

export default Block;