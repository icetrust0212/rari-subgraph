import { BigInt } from "@graphprotocol/graph-ts"
import {
  RariFundManager,
  Deposit,
  FundControllerSet,
  FundDisabled,
  FundEnabled,
  FundManagerUpgraded,
  FundPriceConsumerSet,
  FundProxySet,
  FundRebalancerSet,
  FundTokenSet,
  InterestFeeDeposit,
  OwnershipTransferred,
  Withdrawal
} from "../generated/RariFundManager/RariFundManager"
import { ExampleEntity } from "../generated/schema"

export function handleDeposit(event: Deposit): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.currencyCode = event.params.currencyCode
  entity.sender = event.params.sender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.fundDisabled(...)
  // - contract.isOwner(...)
  // - contract.owner(...)
  // - contract.rariFundController(...)
  // - contract.rariFundPriceConsumer(...)
  // - contract.rariFundToken(...)
  // - contract.forwardLostFunds(...)
  // - contract.getRawFundBalance(...)
  // - contract.getRawFundBalance(...)
  // - contract.getRawFundBalance(...)
  // - contract.getFundBalance(...)
  // - contract.balanceOf(...)
  // - contract.isCurrencyAccepted(...)
  // - contract.getAcceptedCurrencies(...)
  // - contract.withdraw(...)
  // - contract.withdrawFrom(...)
  // - contract.getRawInterestAccrued(...)
  // - contract.getInterestAccrued(...)
  // - contract.getInterestFeeRate(...)
  // - contract.getInterestFeesGenerated(...)
  // - contract.getInterestFeesUnclaimed(...)
  // - contract.getWithdrawalFeeRate(...)
}

export function handleFundControllerSet(event: FundControllerSet): void {}

export function handleFundDisabled(event: FundDisabled): void {}

export function handleFundEnabled(event: FundEnabled): void {}

export function handleFundManagerUpgraded(event: FundManagerUpgraded): void {}

export function handleFundPriceConsumerSet(event: FundPriceConsumerSet): void {}

export function handleFundProxySet(event: FundProxySet): void {}

export function handleFundRebalancerSet(event: FundRebalancerSet): void {}

export function handleFundTokenSet(event: FundTokenSet): void {}

export function handleInterestFeeDeposit(event: InterestFeeDeposit): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleWithdrawal(event: Withdrawal): void {}
