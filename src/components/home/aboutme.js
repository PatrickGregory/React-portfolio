
import React from 'react'
import Sidebarto from './sidebar'
import Layout from '../layout'
import Main from './home'
import Service from '../services'
import Works from '../works'


export default function Home() {
  return (
    <div className='row gap-0'>
      <div className='col-lg-3'><Sidebarto /></div>
      <div className='col-lg-9'>
        <Layout />
        <Main />
       <div className='mt-5 text-white'>
       <h4>My Services</h4>
        <div className='d-flex gap-5 mt-4'>
            <Service 
            heading = 'Heading 1'
            paragraph = 'lorem gkaslng. jfnangla flgkan bnf;a;anrg na;;kgnfagjtnakfnv ka fkae    fgjanlfgal fsjlnaerf'
            />
            <Service 
            heading = 'Heading 1'
            paragraph = 'lorem gkaslng. jfnangla flgkan bnf;a;anrg na;;kgnfagjtnakfnv ka fkae    fgjanlfgal fsjlnaerf'
            />
            <Service 
            heading = 'Heading 1'
            paragraph = 'lorem gkaslng. jfnangla flgkan bnf;a;anrg na;;kgnfagjtnakfnv ka fkae    fgjanlfgal fsjlnaerf'
            />
          </div>
          <div className='d-flex gap-5 mt-4'>
            <Service 
            heading = 'Heading 1'
            paragraph = 'lorem gkaslng. jfnangla flgkan bnf;a;anrg na;;kgnfagjtnakfnv ka fkae    fgjanlfgal fsjlnaerf'
            />
            <Service 
            heading = 'Heading 1'
            paragraph = 'lorem gkaslng. jfnangla flgkan bnf;a;anrg na;;kgnfagjtnakfnv ka fkae    fgjanlfgal fsjlnaerf'
            />
            <Service 
            heading = 'Heading 1'
            paragraph = 'lorem gkaslng. jfnangla flgkan bnf;a;anrg na;;kgnfagjtnakfnv ka fkae    fgjanlfgal fsjlnaerf'
            />
          </div>
       </div>
       <div className='mt-5'>
        <h4 className='text-white'>Works</h4>
        <div className='d-flex'>
          <Works 
            name = 'Project 1'
            img = './images/project1.png'
          />
          <Works 
            name = 'Project 1'
            img = './images/project1.png'
          />
          <Works 
            name = 'Project 1'
            img = './images/project1.png'
          />
        </div>
       </div>
      </div>
    </div>
  )
}
