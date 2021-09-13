import React, { useState } from 'react';
import '../css/probability.css'
const ProbabilityPage = () => {

    let[tt1,settt1] = useState(0);
    let[tt2,settt2] = useState(0);
    let[tt3,settt3] = useState(0);

    let[rcm,setRcm] = useState(0);
    
    const handlePostNumber =(values)=> {
        values.preventDefault();
        let nb1 = 0;
        let nb2 = 0;
        let nb3 = 0;

        tt1 = 0;
        tt2 = 0;
        tt3 = 0;
        let rd;

        for(var i = 0; i < 3; i++)
		{
			rd = 0;
			let min = Math.ceil(1);
			let max = Math.floor(7);
			rd += Math.floor(Math.random() * (max - min) + min);
			switch(i)
			{
				case 0:
					nb1+=rd;
					break
				case 1:
					nb2+=rd;
					break;
				case 2:
					nb3+=rd;
					break;
				default:
					break;
			}
		}
        settt1(tt1=nb1+nb2+nb3);
        
        nb1 = 0;
        nb2 = 0;
        nb3 = 0;

        for(var j = 0; j < 3; j++)
		{
			rd = 0;
			let min = Math.ceil(1);
			let max = Math.floor(7);
			rd += Math.floor(Math.random() * (max - min) + min);
			switch(j)
			{
				case 0:
					nb1+=rd;
					break
				case 1:
					nb2+=rd;
					break;
				case 2:
					nb3+=rd;
					break;
				default:
					break;
			}
		}

        settt2(tt2=nb1+nb2+nb3);

        nb1 = 0;
        nb2 = 0;
        nb3 = 0;

        for(var k = 0; k < 3; k++)
		{
			rd = 0;
			let min = Math.ceil(1);
			let max = Math.floor(7);
			rd += Math.floor(Math.random() * (max - min) + min);
			switch(k)
			{
				case 0:
					nb1+=rd;
					break
				case 1:
					nb2+=rd;
					break;
				case 2:
					nb3+=rd;
					break;
				default:
					break;
			}
		}

        settt3(tt3=nb1+nb2+nb3);

        var arrRcm = [tt1,tt2,tt3];
        setRcm(rcm= arrRcm[arrRcm.length * Math.random() | 0]);
        document.getElementById("probality__inputs").reset();
    }
    return (
        <>
            <div className="probaliti">
                <div className="probaliti__form-group">
                    <form id="probality__inputs" onSubmit={handlePostNumber} className="probaliti__form-group--submit">
                        <input required placeholder="here....!" min="1" max="6" type="number"/>
                        <input required placeholder="here....!" min="1" max="6" type="number"/>
                        <input required placeholder="here....!" min="1" max="6" type="number"/>
                        <button className="__submit" type="submit">Checked..!</button>
                    </form>
                </div>
                <div className="probaliti__result">
                <table className="probaliti__result--table">
                    <thead>
                        <tr>
                            <th>Kết quả 1</th>
                            <th>Kết quả 2</th>
                            <th>Kết quả 3</th>
                            <th>Đề xuất</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>{tt1}</td>
                            <td>{tt2}</td>
                            <td>{tt3}</td>
                            <td>{rcm > 0 ? rcm >=11?rcm+' Tài':rcm+' Xỉu':''}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </>
    );
};

export default ProbabilityPage;