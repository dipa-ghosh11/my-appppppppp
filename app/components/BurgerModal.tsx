'use client'

import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 

const BurgerModal:React.FC = () => {
    const router=useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        router.push("/checkout")
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

  return (
      <>
          <Button type="primary" onClick={showModal}>
              Order
          </Button>
          <Modal
              title="Basic Modal"
              closable={{ 'aria-label': 'Custom Close Button' }}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
          >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
          </Modal>
      </>
  )
}

export default BurgerModal