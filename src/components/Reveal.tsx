import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface RevealProps {
    children: JSX.Element
    width?: "fit-content" | '100%'
}

export const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
    return (
        <div ref={ref} style={{ overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    )
}

