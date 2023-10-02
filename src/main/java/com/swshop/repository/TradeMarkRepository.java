package com.swshop.repository;

import com.swshop.entity.Product;
import com.swshop.entity.TradeMark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeMarkRepository  extends JpaRepository<TradeMark, Long> {
}
