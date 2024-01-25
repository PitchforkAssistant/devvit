import { Devvit } from '@devvit/public-api';
import { PixelText } from './PixelText.js';
import { PixelSymbol } from './PixelSymbol.js';
import { formatNumberWithCommas } from '../utils/formatNumbers.js';

export type LeaderboardRowProps = {
  rank: number;
  name: string;
  score: number;
  onPress?: () => void;
};

export const LeaderboardRow = (props: LeaderboardRowProps) => {
  const { rank, name, score, onPress } = props;

  return (
    <zstack
      backgroundColor="white"
      cornerRadius="small"
      height="40px"
      width="100%"
      onPress={onPress}
      border="thick"
      borderColor="black"
    >
      <hstack width="100%" height="100%" alignment="start middle">
        <spacer size="medium" />
        <PixelText>{`${rank}. ${name}`}</PixelText>
      </hstack>

      {/* Score partially overlaps name if screen is too narrow */}
      <hstack width="100%" height="100%" alignment="end">
        <image
          url="gradient-transparent-to-white.png"
          imageHeight={1}
          imageWidth={32}
          height="100%"
          width="32px"
          resizeMode="fill"
        />
        <hstack backgroundColor="white" height="100%" alignment="middle">
          <spacer size="small" />
          <PixelText>{formatNumberWithCommas(score)}</PixelText>
          <spacer size="small" />
          <PixelSymbol type="star" />
          <spacer size="medium" />
        </hstack>
      </hstack>
    </zstack>
  );
};
