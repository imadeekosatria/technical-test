/* eslint-disable */
import { JsonView, allExpanded, darkStyles, defaultStyles } from "react-json-view-lite";
import 'react-json-view-lite/dist/index.css'
export default function Json({result, className}) {
  let penilaian = {
    aspek_penilaian_1: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
    aspek_penilaian_2: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
    aspek_penilaian_3: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
    aspek_penilaian_4: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
  };
  return (
    <>
        <JsonView data={result} shouldExpandNode={allExpanded} style={defaultStyles}/>
    </>
  );
}
