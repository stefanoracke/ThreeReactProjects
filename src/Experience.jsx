import { useGLTF, Environment, Float, PresentationControls, ContactShadows, Html } from '@react-three/drei'
import { useState } from 'react'

export default function Experience() {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const phone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
    const [link, setLink] = useState('https://chimpance.digital/')
   

    return <>
        <Environment preset='city' />
        <color attach={'background'} args={['#00214b']} />
        <PresentationControls global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, .75]}
            config={{ mass: 2, tention: 400 }}
            snap={{mass:8, tention:100}}>

            <Float rotationIntensity={.4}>
                {/* <primitive object={phone.scene}
                position={[-3, -1, 0]}
                scale={.7}>

                </primitive> */}

                <primitive object={computer.scene}
                    position={[0, -1.2, 0]}
                >
                    <Html transform
                    wrapperClass='htmlScreen'
                    distanceFactor={.66}
                    position={[-0.01,1.55,-1.4]}
                    rotation-x={-.3}
                    >
                        <iframe src={link} frameborder="0"></iframe>
                    </Html>
                </primitive>
            </Float>
        </PresentationControls>
        <Html position={[4,0,0]}>
            <ul className="changeLink">
                <li className={`${link =='https://chimpance.digital/' ? 'active': '' }`} onClick={()=>{
                    console.log('click')
                    setLink('https://chimpance.digital/')}}>Chimpance</li>
                <li className={`${link == 'https://cinergiaestudiocreativo.com/' ? 'active': ''}`} onClick={()=>{setLink('https://cinergiaestudiocreativo.com/')}}>Cinergia</li>
                <li className={`${link == 'https://aisberg.cl/' ? 'active': ''}`} onClick={()=>{setLink('https://aisberg.cl/')}}>Aisberg</li>
                <li className={`${link == 'http://localhost:3000/' ? 'active': ''}`} onClick={()=>{setLink('http://localhost:3000/')}}>Banker</li>
                
            </ul>
            
        </Html>
        <ContactShadows position-y={-1.4}
        scale={5}
        blur={2.4}
        opacity={.5}/>
    </>
}