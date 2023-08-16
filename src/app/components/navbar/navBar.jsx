import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.titleContainer}>
                    <Image src="https://www.svgrepo.com/show/401272/cat.svg" width={50} height={50} />
                </div>
                <div className={styles.buttons}>
                    <button>
                        inicio
                    </button>
                    <button>
                        Sobre mi
                    </button>
                    <button>
                        Proyectos
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;