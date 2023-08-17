import {FormattedDate, FormattedMessage} from 'react-intl';

/**
 * Includes Good Morning view for authenticated user
 * @returns
 */
export default function GoodMorning() {
  return (
    <div><FormattedMessage id="greeting" />
      <FormattedDate value={new Date()} year="numeric" month="long" day="numeric" />
    </div>
  );
}
