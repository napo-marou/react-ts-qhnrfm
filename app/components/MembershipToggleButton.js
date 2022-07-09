import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconCard from '../../images/card.svg';
import IconFemale from '../../images/venus-symbol.svg';
import { Icon } from '@mui/material';
import { border } from '@mui/system';


export default function MembershipToggleButton() {
  const [membership, setMembership] = React.useState('left');

  const handleMembership = (event, newAlignment) => {
    if (newAlignment !== null) {
      setMembership(newAlignment);
    }
  };

  return (
    <Stack direction="row" spacing={10}>
      <ToggleButtonGroup
        value={membership}
        exclusive
        onChange={handleMembership}
        aria-label="text alignment"
        sx={{border:'none', borderRadius: '50%', padding:'15px', display: 'flex', alignItems: 'center' }}
      >
        <ToggleButton id="classic" value="classic" aria-label="left aligned" sx={{border:'none', borderRadius: '50% !important', padding:'15px', display: 'flex', alignItems: 'center' }}>
          <img src={IconCard}  alt="" width={25} height={25}/>
        </ToggleButton><label for="classic">Classic</label>
        <ToggleButton id="silver" value="silver" aria-label="centered"sx={{border:'none', borderRadius: '50% !important', padding:'15px', display: 'flex', alignItems: 'center' }}>
        <img src={IconCard} alt=""  width={25} height={25}/>
        </ToggleButton><label for="silver">Silver</label>
        <ToggleButton id="gold" value="gold" aria-label="left aligned" sx={{border:'none', borderRadius: '50% !important', padding:'15px', display: 'flex', alignItems: 'center' }}>
          <img src={IconCard}  alt=""  width={25} height={25}/>
        </ToggleButton><label for="gold">Gold</label>
      </ToggleButtonGroup>
      </Stack>
  );
}
