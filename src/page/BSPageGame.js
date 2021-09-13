import React, {useState,useEffect, useRef} from 'react';
import { Radio, notification } from 'antd';
import '../css/bsgame.css';
import 'react-dice-complete/dist/react-dice-complete.css';
import ReactDice from 'react-dice-complete';

const BSPageGame = () => {
    let [coins, setCoins] = useState(100);
	// console.log(`rerender`);
	let [betamountsmall,setBetAmountSmall] = useState(0);
	let [betamountbig,setBetAmountBig] = useState(0);
	let [total, setTotal] = useState(0);
	let [valueAmount,setValueAmout] = useState(0);

	let [currentCount, setCount] = useState(20);
    const timer = () => setCount(currentCount - 1);

    useEffect(
        () => {
            if (currentCount <= 0) {
				rollAll();
				setCount(currentCount+=20)
            }
            const id = setInterval(timer, 1000);
            return () => clearInterval(id);
        },
        [currentCount]
    );

	const rollAll = () => {
		refDice.rollAll();
	}
	const handleCoinsChange = value =>{
		valueAmount = 0;
		setValueAmout(valueAmount += parseInt(value));
	}

	const updateSmallAmout = () => {
		if(valueAmount !== null && valueAmount !== undefined && valueAmount !== 0)
		{
			if(betamountsmall === undefined)
				betamountsmall = 0;
			if(coins >= valueAmount)
			{
				setBetAmountSmall(betamountsmall+=valueAmount);
				setCoins(coins-=valueAmount);
				
			}
			else
			{
				notification.open({
					message: 'Thông báo!!',
					description:
					  'Không đủ coins để cược',
				});
			}
		}
	}

	const updateBigAmout = () => {
		if(valueAmount !== null && valueAmount !== undefined && valueAmount !== 0)
		{
			if(betamountbig === undefined)
				betamountbig = 0;
			if(coins >= valueAmount)
			{
				setBetAmountBig(betamountbig+=valueAmount);
				setCoins(coins-=valueAmount);
			}
			else
			{
				notification.open({
					message: 'Thông báo!!',
					description:
					  'Không đủ coins để cược',
				});
			}
		}
	}

	let totalRollDone = (num) => {
		console.log(num);
		setTotal(total=num);
		if(total >= 3 && total <= 10)
		{
			setCoins(coins+=(betamountsmall*2)*0.9);
		}
		else if (total >= 11 && total <= 18)
		{
			setCoins(coins+=(betamountbig*2)*0.9)
		}
		setBetAmountSmall(betamountsmall=0);
		setBetAmountBig(betamountbig=0);
	}
	let refDice = useRef(null);
    return (
    <div className="wapper__bsgame-container">
        <div className="info-user">
			<p>Tài khoản : <span>{coins} coins</span></p>
			<h1>Dice</h1>
		</div>
		<div className="dices">
			<ReactDice ref={dice => refDice = dice} rollDone={totalRollDone} faceColor="#00bfff" disableIndividual={true} dotColor="#dbf6f8" numDice={3} rollTime={2}/>
		</div>
		<span className="total">
			Kết quả: {total} điểm { total>0?total>=11?'Tài':'Xỉu':''}
			</span>
		<div className="current-time">
			<p>Thời gian còn lại: {currentCount} giây</p>
		</div>
		<div className="table">
			<div className="table_">
				<div onClick={()=>updateSmallAmout()} className="table__small">
					<p>XỈU</p>
					<span>{betamountsmall} coins</span>
				</div>
				<div onClick={()=>updateBigAmout()} className="table__big">
					<p>TÀI</p>
					<span>{betamountbig} coins</span>
				</div>
			</div>
			<br/>
		<Radio.Group className="table_amout_group" onChange={(e)=>handleCoinsChange(e.target.value)}>
          <Radio.Button className="__child" value="100">100</Radio.Button>
          <Radio.Button className="__child" value="500">500</Radio.Button>
          <Radio.Button className="__child" value="1000">1000</Radio.Button>
		  <Radio.Button className="__child" value="5000">5000</Radio.Button>
		  <Radio.Button className="__child" value="10000">10000</Radio.Button>
        </Radio.Group>
    </div>
    </div>
    );
};

export default BSPageGame;