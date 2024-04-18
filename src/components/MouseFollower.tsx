'use client';
import React, { useState, useEffect } from 'react';
import styles from './MouseFollower.module.css'; // Import CSS module

const MouseFollower = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: any) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div
			className={styles.mouseFollower}
			style={{ left: position.x, top: position.y }}
		/>
	);
};

export default MouseFollower;
