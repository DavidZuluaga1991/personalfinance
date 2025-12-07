"use client";
import styled from "styled-components";

const CardWrapper = styled.div<{ color?: string }>`
  background: #ffffff;
  padding: 20px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  border-left: 6px solid ${({ color }) => color || "#3b82f6"};
`;

const Label = styled.span`
  font-size: 15px;
  color: #6b7280;
`;

const Value = styled.span`
  font-size: 26px;
  font-weight: 700;
  color: #111827;
`;

interface Props {
  label: string;
  value: string | number;
  color?: string;
}

export default function DashboardCard({ label, value, color }: Props) {
  return (
    <CardWrapper color={color}>
      <Label>{label}</Label>
      <Value>{value}</Value>asdasdasdasdasdad
    </CardWrapper>
  );
}
