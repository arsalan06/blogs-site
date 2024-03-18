export const featureCardMainContainer = {
  height: '80dvh',
  py: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5'
};

export const featureCardCaptionContainer = {
  display: 'flex',
  flexDirection: { md: 'row', sm: 'column' },
  justifyContent: 'space-between'
  // alignItems: 'center'
};
export const featureCardMTextCaption = {
  fontSize: { md: '16px', sm: '12px', xs: '11px' },
  color: '#939191',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center'
};
export const normalCardContent = {
  '&.MuiCardContent-root': {
    padding: '0px'
  }
};
export const normalCardCaption = {
  fontSize: '12px',
  color: '#939191',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center'
};

export const normalCardTitle = {
  fontSize: '18px',
  color: '#1E1B1B',
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px'
};

export const normalCardSubTitle = {
  fontSize: '16px',
  color: '#1E1B1B',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px'
};
