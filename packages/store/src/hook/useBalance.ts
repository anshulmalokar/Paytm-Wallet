import { useRecoilState } from "recoil";
import { balanceAtom  } from "../atom/balanceAtom";

export const useBalance = () => {
    const value = useRecoilState(balanceAtom);
    return value;
}