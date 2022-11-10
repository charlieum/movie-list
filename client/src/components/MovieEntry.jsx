import React from 'react';

const MovieEntry = ({dataInstance}) => {
  return (
    <div className="movieEntry">
      <table width='100%'>
        <tbody>
          <tr>
            <td className='title'>
              {dataInstance.title}
            </td>
            <td className='toggle'>
              toggle
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MovieEntry;
