import React from "react";
import Image from "next/image";

const styles = {
  coinNameRow: `flex items-center`,
  buyButton: `bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`,
};

const CoinNameRow = ({ name, icon, clicked }) => {

  return (
    <div className={styles.coinNameRow}>
      <div className='mr-3 flex' onClick={clicked}>
        <div className='mr-2'>
        <Image
            src={icon}
            className="rounded-full"
            width={20}
            height={20}
            alt=""
          />
        </div>
        {name}
      </div>

      <p>
        {name === 'Bitcoin' || name === "Ethereum" || name === 'Tether' ? (
          <span className={styles.buyButton}>
              Buy
          </span>
        ) : (
          <></>
        )}
      </p>
    </div>
  );
};

export default CoinNameRow;
