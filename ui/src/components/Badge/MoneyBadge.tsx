import { Money } from "../../lib/money";
import { Badge, BadgeProps, BadgeVariant } from "./Badge";

export type MondeyBadgeProps = BadgeProps & {
  money: Money;
};

export const MoneyBadge: React.FC<MondeyBadgeProps> = ({
  money,
  children,
  ...props
}) => {
  const badgeVariant: BadgeVariant = money.isPositive ? "success" : "danger";

  const render = (): React.ReactElement => {
    return (
      <Badge variant={badgeVariant} {...props}>
        {money.formatted}
      </Badge>
    );
  };

  return render();
};
