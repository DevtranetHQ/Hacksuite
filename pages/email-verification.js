import { useRouter } from "next/router";
import { axios } from "../config/config";
import { useEffect, useState } from "react";

export default function EmailVerificationRes(props) {
    const endpoint = "/auth/verify-email";
    const method = "POST";

    const [data, setData] = useState("");
    const router = useRouter();

    useEffect(() => {
        const params = router.query;
        console.log(router.query);
        async function verifyEmail() {
            try {
                await axios({
                    url: endpoint,
                    method: method,
                    data: {
                        userId: params.uid,
                        verifyToken: params.verifyToken
                    }
                });
                setData("cool");
            } catch (e) {
                setData(e.response.data ? e.response.data.message : e.message);
            }
        }
        verifyEmail();
    }, []);
    return <h2>{data}</h2>;
}
