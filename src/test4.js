import React from 'react'
import {useState, useEffect} from 'react';

function Test4() {
    const [count, setCount] = useState(0);


    const [loading, setLoading] = React.useState(true);


    // 类似于componentDidMount 和 componentDidUpdate:

    useEffect(() => {
        console.log(count)
    });

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('useEffect',count)
    //     }, 2000)
    // },[count]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('useEffect',count2)
    //     }, 2000)
    // },[count2]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('useEffect',count3)
    //     }, 2000)
    // },[count3]);

    // const ref = React.useRef(count)
    //
    // useEffect(() => {//如果你需要有一个地方来存储变化的数据
    //     ref.current = count
    //     setTimeout(() => {
    //         console.log('ref',ref.current)
    //     }, 2000)
    // })



    // return (
    //     <div>
    //         <p>You clicked {count} times</p>
    //         {/*<p>PreCount: {ref.current}</p>*/}
    //         <button onClick={() => setCount(count + 1)}>
    //             Click me
    //         </button>
    //         <button onClick={() => setCount(count2 + 1)}>
    //             Click me
    //         </button>
    //         <button onClick={() => setCount(count3 + 1)}>
    //             Click me
    //         </button>
    //     </div>
    // );

    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setCount(1);
    //         setLoading(false);
    //     }, 2000);
    // });

    // const fetch = () => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setCount(1);
    //         setLoading(false);
    //     }, 2000);
    // }
    const fetch = React.useCallback(() => {//这个 Hooks 可以生成一个不随着组件更新而再次创建的 callback
        setLoading(true);
        setTimeout(() => {
            setCount(1);
            setLoading(false);
        }, 2000);
    }, [])

    useEffect(() => {
        fetch()
    }, [fetch])



    return (
        <div>
            {!loading ?
                <div>
                    <p>You clicked {count} times</p>
                    {/*<p>PreCount: {ref.current}</p>*/}
                    <button onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                </div>
                :
                <div>loading</div>}
        </div>
    );


}

export default Test4