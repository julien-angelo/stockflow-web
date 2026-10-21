import React from 'react'

import Card from '../components/card'
import Button from './Button'

import { Button as ShadCNButton } from '../components/ui/button';

function Home() {
    return (
        <div>Home
            <Card content={"Card 1"} />
            <Card content={"Card 2"} />
            <Button />
            <ShadCNButton>OK</ShadCNButton>
            <ShadCNButton variant='outline'>Cancel</ShadCNButton>
        </div>

    )
}

export default Home 