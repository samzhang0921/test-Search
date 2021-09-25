import React from 'react';
import { createComponent } from 'react-fela';

const SectionWrapper = createComponent(
  () => ({
    display: 'block',
    boxSizing: 'border-box',
    position: 'relative',
  }),
  'div'
);
const PageBanner = createComponent(
  () => ({
    maxHeight: '450px',
    minHeight: '100px',
    overflow: 'hidden',
  }),
  'div'
);
const ImgBanner = createComponent(
  () => ({
    width: '100%',
  }),
  'img',
  ['alt', 'src']
);
const SearchBoxContainer = createComponent(
  () => ({
    position: 'relative',
    maxWidth: '800px',
    padding: '16px',
    minHeight: '211px',
    background: 'white',
    zIndex: '10',
    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 16%)',
    textAlign: 'center',
    fontFamily: 'JetSansDigital,Arial,sans-serif',
    '@media (min-width: 768px)': {
      width: '80%',
      margin: '-100px auto auto',
    },
    '@media (min-width: 1024px)': {
      margin: '-211px auto auto',
    }
  }),
  'div'
);

const SearchBox = createComponent(
  () => ({
    position: 'relative',
    minHeight: '60px',
    maxWidth: '611px',
    display: 'flex',
    margin: '0 auto',
  }),
  'div'
);


const Header1 = createComponent(
  () => ({
    color: '#f36d00',
    fontSize: '24px',
    margin: '0 0 12px',
    '@media (min-width: 1024px)': {
      fontSize: '48px',

    }
  }),
  'h1'
);

const Header2 = createComponent(
  () => ({
    color: '#000',
    fontSize: '16px',
    margin: '0 0 16px',
    '@media (min-width: 1024px)': {
      fontSize: '20px',

    }
  }),
  'h2'
);

const InputBar = createComponent(
  () => ({
    flex: '1 1 auto',
    ':focus':{
      outline: 'none',
    },
  }),
  'input',
  ['id', 'placeholder']
);

const SearchButton = createComponent(
  () => ({
    minWidth: '128px',
    padding: '11px 16px'
  }),
  'button',
  ['onClick']
);

const SearchSection = ({ setSearchPostcode }) => {
  const fireSearch = () => {
    var inputVal = document.getElementById('searchInput').value;
    setSearchPostcode(inputVal);
    document.getElementById('searchInput').value=''
  }
  return (
    <SectionWrapper>
      <PageBanner>
        <ImgBanner
          src='https://d30v2pzvrfyzpo.cloudfront.net/a/hw/img/decoration/bg_hero-wide-uk.jpg'
          alt='Banner'
        />
      </PageBanner>
      <SearchBoxContainer>
      <Header1 > Tuck into a takeaway today </Header1>
      <Header2 > Find restaurants delivering right now, near you </Header2>
        <SearchBox>
          <InputBar id='searchInput' placeholder='Enter your postcode'/>
          <SearchButton onClick={()=>fireSearch()}>Search</SearchButton>
        </SearchBox>
      </SearchBoxContainer>
    </SectionWrapper>
  );
};

export default SearchSection;
