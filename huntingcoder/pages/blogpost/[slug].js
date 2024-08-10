import { useRouter } from 'next/router';
import React from 'react'

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    console.log('sss',slug)
    return (
        <div>{slug}</div>
    )
}

export default Slug