import React from 'react';
import { Col, Row } from 'antd';
import { NotificationsDropdown } from '../components/notificationsDropdown/NotificationsDropdown';
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown';
import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch';
import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown';
import { HeaderFullscreen } from '../components/HeaderFullscreen/HeaderFullscreen';
import * as S from '../Header.styles';

interface DesktopHeaderProps {
  isTwoColumnsLayout: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout }) => {
  const leftSide = isTwoColumnsLayout ? <></> : <></>;

  return (
    <Row justify="space-between" align="middle">
      {leftSide}

      <S.ProfileColumn xl={24} xxl={24} $isTwoColumnsLayout={isTwoColumnsLayout}>
        <Row align="middle" justify="end" gutter={[10, 10]}>
          <Col>
            <Row gutter={[{ xxl: 10 }, { xxl: 10 }]}>
              <Col>
                <HeaderFullscreen />
              </Col>

              <Col>
                <SettingsDropdown />
              </Col>
            </Row>
          </Col>

          <Col>
            <ProfileDropdown />
          </Col>
        </Row>
      </S.ProfileColumn>
    </Row>
  );
};
