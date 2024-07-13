import { useEffect, useState } from 'react';
import { useReward } from 'react-rewards';

const config = {
    lifetime : 500,
    decay : 0.95,
    spread : 130,
    elementCount : 100,
}

function ConfettiExplosion (props) {
    const { reward } = useReward('rewardId', 'confetti', config);
    const [end, setEnd] = useState(false);

    useEffect(() => {
        if(props.fire) {
            setEnd(true);
        }
    }, [props.fire])

    if(end) {
        reward();
        setEnd(false);
    }

    return (
        <span id="rewardId"/>
    )
}

export default ConfettiExplosion