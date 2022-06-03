import React from 'react';
import { AiOutlineFileGif } from 'react-icons/ai';

export const EntryData = ({event}) => {
  return (
    <div className="entry">
      <input onChange={event} type="text" placeholder="Find gif in tenor..." />
      <AiOutlineFileGif className='icon-gif' />
    </div>
  )
}
