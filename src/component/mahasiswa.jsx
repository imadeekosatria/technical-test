/* eslint-disable */
export default function Mahasiswa({ mahasiswa }) {
  return (
    <>
      <tr className="border-collapse border h-12 mx-auto">
        <td className="flex items-center justify-center h-12 gap-x-4 w-fit px-4">
          <label htmlFor={mahasiswa}>
            <box-icon type="solid" name="user-circle"></box-icon>
            <span className="capitalize">{mahasiswa}</span>
          </label>
        </td>
        <td className="px-3">
          <select name="nilai1" id="nilai1" className="border w-full">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </td>
        <td className="px-3">
          <select name="nilai2" id="nilai2" className="border w-full">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </td>
        <td className="px-3">
          <select name="nilai3" id="nilai3" className="border w-full">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </td>
        <td className="px-3">
          <select name="nilai4" id="nilai4" className="border w-full">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </td>
      </tr>
    </>
  );
}
