import { Card, ListGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import Cookies from "js-cookie";

export default function Home() {

  const [isCardOpen, setCardOpen] = React.useState(false);
  const ref = useRef(null);
  const nav = useNavigate();
  const [isOverProfile, setOverProfile] = useState(false);

      useEffect(() => {
        if(Cookies.get("id") === undefined){
            nav("/login");
        } 
    },)

  function useOnClickOutside(ref: any, handler: any) {
    useEffect(
      () => {
        const listener = (event: Event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          setOverProfile(false)
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      }, [ref, handler]
    );
  }
  useOnClickOutside(ref, () => setCardOpen(false));

  const handlerManageProfile = () => {
    nav('/manageProfile');
  }

  const handlerDeleteProfile = () => {
    nav('/deleteProfile');
  }

  return (
    <div className='container'>
      <header style={{ marginTop: "15px" }}>
        {isCardOpen ? (
          <div ref={ref}>
            <Card
              style={{
                float: 'right',
                width: '12rem',
                zIndex:'99999',
              }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Account</Card.Title>
              </Card.Body>
              <ListGroup variant="flush" style={{ cursor: 'pointer' }}>
                <ListGroup.Item className='lgCard' onClick={handlerManageProfile}>Manage Profile</ListGroup.Item>
                <ListGroup.Item className='lgCard' onClick={handlerDeleteProfile}>Delete Profile</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        ) : (
          <div>
            <button className='btn-primary btn-circle' onClick={() => setCardOpen(true)} onMouseEnter={() => setOverProfile(true)} onMouseLeave={() => setOverProfile(false)}
              style={{
                float: 'right',
                width: '50px',
                height: '50px',
                padding: '9px 0px',
                borderRadius: '80px',
                textAlign: 'center',
                fontSize: '12px',
                lineHeight: '1.42857',
                border: isOverProfile ? '5px solid #cfdcec' : '5px solid #ffffff',
                backgroundImage: 'url(https://as2.ftcdn.net/v2/jpg/00/79/05/79/1000_F_79057904_WLTgouvy0s4qEAnEHYhq472wLLpnxN8K.jpg)',
                backgroundPosition: "center",
                backgroundSize: '50px',
              }}
            ></button>

          </div>
        )}
      </header >
    </div >
  )
}

// type HomeProps = IHOmeProps;
// type HomeState = IHOmeState
// interface IHOmeProps { }
// interface IHOmeState { }

