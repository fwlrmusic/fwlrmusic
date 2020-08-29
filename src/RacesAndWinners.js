import React from 'react'
import './resources/RacesAndWinners.css'
import SocialLinks from './SocialLinks'

const RacesAndWinners = () => {
  return (
    <div className='races-and-winners-container'>
      <div className='races-and-winners'>
        <div className='single-container'>
          <h2>
            Race #4: Wayfarer
          </h2>
          <a
            href='http://smarturl.it/wayfarer1'
            title='Links to Wayfarer single'
            target='_blank'
            className='single'
            rel='noopener noreferrer nofollow'
          >
            <img
              src='https://res.cloudinary.com/dtweazqf2/image/upload/w_320,f_auto,q_auto,e_sharpen/v1598717844/Wayfarer_Art_frrnic.jpg'
              alt='Wayfarer single art'
            />
          </a>
          <p className='password'>Password:</p>
          <p>Wanna do some tuning? Use the password PIMPMYRIDE. If you can't find what you're looking for hit F9. Right click and hold to navigate.</p>
          <p className='winner'>Winner: Mason Scanlon (July 4th, 2020)</p>
          <div className='how-we-win-container'>
            <a
              href='https://3621bc17-7f74-4355-9485-f98feeb15fb0.filesusr.com/ugd/663e19_cb4c409bd5394a5bb8ad5e35615c1761.pdf'
              title='Race #4 solution'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              How We Win
            </a>
          </div>
        </div>
        <div className='single-container'>
          <h2>
            Race #3: Doc Martens
          </h2>
          <a
            href='https://fanlink.to/doc-martens'
            title='Links to Doc Martens single'
            target='_blank'
            className='single'
            rel='noopener noreferrer nofollow'
          >
            <img
              src='https://res.cloudinary.com/dtweazqf2/image/upload/w_320,f_auto,q_auto/v1598717873/Doc_Martens_Album_Art_tew7hd.jpg'
              alt='Wayfarer single art'
            />
          </a>
          <p className='password'>Password:</p>
          <p>Take 6525 and reverse it. Use this map (http://bit.ly/ItIsAMap) and 54321letsgo to find your way through the rally of folders.</p>
          <p className='winner'>Winner: RVRS (May 16th, 2020)</p>
          <div className='how-we-win-container'>
            <a
              href='https://3621bc17-7f74-4355-9485-f98feeb15fb0.filesusr.com/ugd/663e19_cb0ea6b7c5324f87b0f035bb62d2fb52.pdf'
              title='Race #3 solution'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              How We Qwinn
            </a>
          </div>
        </div>
        <div className='single-container'>
          <h2>
            Race #2: Bust It Out
          </h2>
          <a
            href='https://monstercat.ffm.to/bustitout-zo9q'
            title='Links to Bust It Out single'
            target='_blank'
            className='single'
            rel='noopener noreferrer nofollow'
          >
            <img
              src='https://res.cloudinary.com/dtweazqf2/image/upload/w_320,f_auto,q_auto,e_sharpen/v1598717858/FWLR--Bust-It-Out-_Art_iozus1.jpg'
              alt='Bust It Out single art'
            />
          </a>
          <p className='password'>Password:</p>
          <p>No need to spread the word, but the password is "Pa55!!word!!". So if you're sad, comment Metaphysically which will lead to a shift of +7 naturally.</p>
          <p className='winner'>Winner: Eswyn (April 11th, 2020)</p>
          <p className='winner'>2nd Place: RVRS (April 11th, 2020)</p>
          <div className='how-we-win-container'>
            <a
              href='https://3621bc17-7f74-4355-9485-f98feeb15fb0.filesusr.com/ugd/663e19_7c837a3954914e4eb518e89495699936.pdf'
              title='Race #2 solution'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              How We Win
            </a>
          </div>
        </div>
        <div className='single-container last'>
          <h2>
            Race #1: Freaky
          </h2>
          <a
            href='https://fanlink.to/FWLR-Freaky'
            title='Links to Wayfarer single'
            target='_blank'
            className='single'
            rel='noopener noreferrer nofollow'
          >
            <img
              src='https://res.cloudinary.com/dtweazqf2/image/upload/w_320,f_auto,q_auto/v1598717867/FWLR_-_Freaky_dsxcbm.png'
              alt='Wayfarer single art'
            />
          </a>
          <p className='winner'>Winner: Kyle Yalch (March 12th, 2020)</p>
          <div className='how-we-win-container'>
            <a
              href='https://3621bc17-7f74-4355-9485-f98feeb15fb0.filesusr.com/ugd/663e19_84e577310f254e76a4a1dad4bd8fb00e.pdf'
              title='Race #1 solution'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              How We Win
            </a>
          </div>
        </div>
        <SocialLinks />
      </div>
    </div>
  )
}

export default RacesAndWinners
