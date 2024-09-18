
import React from 'react'
import Layout from '../layout'
import Main from './home'
import Service from '../services'
import Works from '../works'
import Sidebar from './sidebar'


export default function Home() {
  return (
    <div className='row'>
      <div className='col-lg-3'><Sidebar /></div>
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
        <div className='row'>
          <div className='col-sm-6 col-md-4 col-lg-4'>
            <Works 
              name = 'Project 1'
              img = './images/project1.png'
            />
          </div>
          <div className='col-sm-6 col-md-4 col-lg-4'>
            <Works 
              name = 'Project 1'
              img = './images/project1.png'
            />
          </div>
          <div className='col-sm-6 col-md-4 col-lg-4'>
          <Works 
            name = 'Project 1'
            img = './images/project1.png'
          />
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}
